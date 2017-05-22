#!/bin/bash
while read line
do
  echo "$line" |
( 
 read string;
 if [[ $string == *"Ringing"* ]]; then
  echo "IM THE BEST"
  curl localhost:3000/addcall
fi
)
done < "${1:-/dev/stdin}"
