// Made by Mohamad
// Made on May 2023
//
// This program will perform a simple multiplication using an old method

package main

import (
	"fmt"
)

func main() {
	// Define variables
	var numberA int
	var numberB int
	var counter int
	var answer int

	// Ask for input
	fmt.Println("Enter the first number: ")
	fmt.Scanln(&numberA)
	fmt.Println("Enter the second number: ")
	fmt.Scanln(&numberB)

	// Calculate
	for counter < numberB {
		counter++
		answer += numberA
	}

	// Display answer
	fmt.Println("The answer is", answer)

	fmt.Println("\nDone.")
}

