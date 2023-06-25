#!/bin/bash

commit_hash=$1
status_page_url=https://github.com/42-world/42-world.github.io/actions

attempt=0
max_attempts=20
while [ $attempt -lt $max_attempts ]; do
    # 웹페이지의 내용을 'body' 변수에 저장
    body=$(curl -s $status_page_url \
      -H 'Host: github.com' \
      -H 'Connection: keep-alive' \
      -H 'Cache-Control: max-age=0' \
      -H 'sec-ch-ua: "Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"' \
      -H 'sec-ch-ua-mobile: ?0' \
      -H 'sec-ch-ua-platform: "macOS"' \
      -H 'Upgrade-Insecure-Requests: 1' \
      -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36' \
      -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
      -H 'Sec-Fetch-Site: none' \
      -H 'Sec-Fetch-Mode: navigate' \
      -H 'Sec-Fetch-User: ?1' \
      -H 'Sec-Fetch-Dest: document' \
      -H 'Accept-Language: en-US,en;q=0.9' )

    pathname=$(echo "$body" | sed -n 's/.*<a[^>]*href="\([^"]*\)".*/\1/p' | grep actions/runs | awk -F '/jobs' '{print $1}' | head -n 1)

    # 만약 'pathname' 변수에 내용이 있으면 반복을 종료
    if [ -n "$pathname" ]; then
        break
    else
        # 짧은 대기시간을 두고 다시 시도
        sleep 1
        attempt=$((attempt + 1))
    fi
done

# 결과 출력
if [ -n "$pathname" ]; then
    echo "https://github.com${pathname}"
else
    echo $status_page_url
fi
