import { act, render, screen } from '@testing-library/react';
import { Input } from '.';
import userEvent from '@testing-library/user-event';

describe('Input의 정상 동작은 아래와 같다.', () => {
  test('Input이 정상적으로 렌더링 된다.', () => {
    render(<Input />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeInTheDocument();
  });

  describe('Input의', () => {
    test('placeholder가 정상적으로 렌더링 된다.', () => {
      const placeholder = '텍스트를 입력해주세요.';
      render(<Input placeholder={placeholder} />);

      const inputElement = screen.getByRole('textbox');

      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute('placeholder', placeholder);
    });

    test('value가 정상적으로 렌더링 된다.', () => {
      const value = '테스트';
      render(<Input value={value} />);

      const inputElement = screen.getByRole('textbox');

      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveValue(value);
    });

    test('onValueChange가 정상적으로 동작한다.', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(<Input onValueChange={onChange} />);

      const inputElement = screen.getByRole('textbox');

      expect(inputElement).toBeInTheDocument();
      expect(onChange).not.toHaveBeenCalled();

      const value = 'test';

      await act(async () => {
        await user.type(inputElement, value);
      });

      expect(onChange).toHaveBeenCalledTimes(value.length);
      expect(onChange).toHaveBeenCalledWith(value);

      expect(inputElement).toHaveValue(value);
    });

    test('maxLength가 정상적으로 동작한다.', async () => {
      const user = userEvent.setup();
      const maxLength = 10;
      render(<Input maxLength={maxLength} />);

      const inputElement = screen.getByRole('textbox');

      expect(inputElement).toBeInTheDocument();

      const value = 'testtesttesttesttest';

      await act(async () => {
        await user.type(inputElement, value);
      });

      expect(inputElement).toHaveValue(value.slice(0, maxLength));
    });

    test('disabled가 정상적으로 동작한다.', () => {
      render(<Input disabled />);

      const inputElement = screen.getByRole('textbox');

      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toBeDisabled();

      inputElement.focus();

      expect(inputElement).not.toHaveFocus();

      userEvent.type(inputElement, 'test');

      expect(inputElement).toHaveValue('');
    });

    test('readOnly가 정상적으로 동작한다.', () => {
      render(<Input readOnly />);

      const inputElement = screen.getByRole('textbox');

      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute('readonly');

      userEvent.type(inputElement, 'test');

      expect(inputElement).toHaveValue('');
    });
  });
});
