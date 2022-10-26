#!/bin/bash

# usage example
# ./get-build-complete-message 0.0.1

version=$1

trim() {
    local var=$1

    echo ${var##*( )}
}

get_status() {
    local filepath=$1
    local status=$(git status | grep $filepath | cut -d ":" -f 1)

    trim $status
}

make_link() {
    local filepath=$1
    local dirpath=$(dirname $filepath)
    local filename=$(basename $filepath .tsx)
    local url="https://42-world.github.io/42world-Design-System/$version/$dirpath/$filename.js"

    echo "[$dirpath/$filename]($url)"
}

get_diff_component() {
    local list=$(git status | grep $version | cut -d ":" -f 2)

    for raw_filepath in $list; do
        local filepath=$(trim $raw_filepath | sed "s/$version\///g")
        local status=$(get_status $filepath)
        local link=$(make_link $filepath)

        echo -n "- $status : $link\n"
    done
}


main() {
    echo -n "## $version 빌드 완로 🚀\n"
    echo -n "\n"
    echo -n "### Changes & URL\n"
    echo -n "\n"
    get_diff_component
    echo -n "\n"
    echo -n "github pages 배포후에 사용가능합니다.\n"
}

main