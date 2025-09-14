#!/usr/bin/env python3

file_name = "content/_generated/data.js"

counter = 0
with open(f"../{file_name}", 'w') as _output:
    _output.write(f'const data = [')
    _output.write("\n")
    with open('/Users/alan/Grimoire/site- Ideas For Programming Projects For The Subdomain.neo') as _input:
        _output.write(f"// Don't edit '{file_name}' directly. Update content in the grimoire. See README\n")
        data = _input.read().split('"""')[1]
        lines = data.split("\n")
        for line in lines:
            string_list = line.split('- ')
            if len(string_list) == 2:
                counter += 1
                print(string_list[1])
                _output.write(f"`{string_list[1]}`,\n")

    _output.write("]")

print(f"Output {counter} ideas")
