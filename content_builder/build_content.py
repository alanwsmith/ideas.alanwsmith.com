#!/usr/bin/env python3


counter = 0
with open('../components/IdeasData.js', 'w') as _output:
    _output.write(f'export const ideasData = [')
    _output.write("\n")
    with open('/Users/alans/Dropbox/grimoire/site- Ideas For Programming Projects For The Subdomain.txt') as _input:
        data = _input.read().split('```')[1]
        lines = data.split("\n")
        for line in lines:
            string_list = line.split('- ')
            if len(string_list) == 2:
                counter += 1
                print(string_list[1])
                _output.write(f"`{string_list[1]}`,\n")

    _output.write("]")

print(f"Output {counter} ideas")

