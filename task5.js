function calculateAreaOfTriangle(side1,side2,side3){
    const semiPerimeter = 1/2*(side1 + side2 + side3);
    const area = Math.sqrt((semiPerimeter*(semiPerimeter-side1)*(semiPerimeter-side2)*(semiPerimeter-side3)))
    return area;
}
