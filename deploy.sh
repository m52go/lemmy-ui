#!/bin/bash

new_tag="$1"

sudo docker build . --tag m52go/lemmy-ui:$new_tag
sudo docker push m52go/lemmy-ui:$new_tag

git tag $new_tag
git push gh $new_tag
