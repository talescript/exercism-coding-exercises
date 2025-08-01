package twofer

import "fmt"

func ShareWith(name string) string {
    if name == "" {
        name = "you"
    } 
	result := fmt.Sprintf("One for %s, one for me.", name)

	return result
}
