#!/bin/bash

startwith() {
    local str="$1"
    local prefix="$2"
    [[ "$str" == "$prefix"* ]]
    return $?
}


title=$1
if startwith "$title" "major"; then
    echo "--major"
elif startwith "$title" "Major"; then
    echo "--major"
elif startwith "$title" "feat"; then
    echo "--minor"
elif startwith "$title" "Feat"; then
    echo "--minor"
else
    echo "--patch"
fi