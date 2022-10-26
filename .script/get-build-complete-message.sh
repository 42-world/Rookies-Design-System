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
    local list=$(git status | grep src | cut -d ":" -f 2)

    for raw_filepath in $list; do
        local filepath=$(trim $raw_filepath | sed 's/src\///g')
        local status=$(get_status $filepath)
        local link=$(make_link $filepath)

        echo "- $status : $link"
    done
}


main() {
    echo "## $version 빌드 완로 🚀"
    echo ""
    echo "### Changes & URL"
    echo ""
    get_diff_component
    echo ""
    echo "github pages 배포후에 사용가능합니다."
}

main