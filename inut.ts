class ExampleStaticClass {
    static readonly classDescription: string = 'This class contains static members only.';

    static printDescription(): void {
        console.log(ExampleStaticClass.classDescription);
    }

    static calculateArea(radius: number): number {
        return Math.PI * radius * radius;
    }
}

// Usage
ExampleStaticClass.printDescription(); // Outputs the description of the class
const area = ExampleStaticClass.calculateArea(5); // Calculates the area with a radius of 5
console.log(`The area is: ${area}`);
