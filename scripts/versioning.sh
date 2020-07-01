#! /bin/bash

function increment_version() {
    local version=$1
    local major=$(echo $version | awk -F'.' '{print $1}')
    local minor=$(echo $version | awk -F'.' '{print $2}')
    local patch=$(echo $version | awk -F'.' '{print $3}')

    case "${SRC_BRANCH}" in
        Major*)
            ((major++))
            minor=0
            patch=0
            ;;
        Feature*)
            ((minor++))
            patch=0
            ;;
        Enhancement*)
            ((minor++))
            patch=0
            ;;
        Improvement*)
            ((minor++))
            patch=0
            ;;
        Bugfix*)
            ((patch++))
            ;;
        Patch*)
            ((patch++))
            ;;
        Test*)
            ((patch++))
            ;;
    esac

    echo ${major}.${minor}.${patch}
}

SRC_BRANCH=$(git log -1 --pretty=%s | awk '{print $1}' | cut -d '/' -f 1)
if ! [[ "$SRC_BRANCH" =~ ^"Major"* ]] && ! [[ "$SRC_BRANCH" =~ ^"Feature"* ]] && ! [[ "$SRC_BRANCH" = ^"Enhancement"* ]] && ! [[ "$SRC_BRANCH" =~ ^"Improvement"* ]] && ! [[ "$SRC_BRANCH" =~ ^"Bugfix"* ]] && ! [[ "$SRC_BRANCH" =~ ^"Patch"* ]] && ! [[ "$SRC_BRANCH" =~ ^"Test"* ]] ; then
    (>&2 echo "Invalid srouce branch, can't bump version")
    exit 1
fi

TAG=$(git describe --abbrev=0 --tags 2> /dev/null)
if [[ $? -ne 0 ]]; then
    (>&2 echo "ERROR: No tag found")
    exit 1
fi

VERSION=""
CURRENT_BRANCH=$(git branch | grep \* | cut -d ' ' -f 2 | sed "$ s/\//-/")

if [ "${CURRENT_BRANCH}" == "dev" ] ; then
    VERSION=$(increment_version $TAG)
elif [ "${CURRENT_BRANCH}" != "dev" ] ; then
    (>&2 echo "ERROR: Not on dev")
    exit 1
else
    (>&2 echo "ERROR: Unknown")
    exit 1
fi

echo ${VERSION}
