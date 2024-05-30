import {humanities,sciences,languages,calculateGradeAverage} from "./main";
describe("grading", () =>{
    it ("returns A if the marks is above 80 to 100" ,() =>{
        expect(humanities(80)).toBe('A');
    })
    it ("returns B if the marks is above 70 to 79" ,() =>{
        expect(humanities(75)).toBe('B');
    })
    it ("returns c if the marks is above 60 to 69" ,() =>{
        expect(humanities(65)).toBe('C');
    })
    it ("returns Pass if the marks is above 50 to 59" ,() =>{
        expect(humanities(55)).toBe('Pass');
    })
    it ("returns Sup if the marks is below 50" ,() =>{
        expect(humanities(49)).toBe('Sup');
    })


})

describe("sciences", () =>{
    it ("returns A if the marks is above 70 to 100" ,() =>{
        expect(sciences(70)).toBe('A');
    })
    it ("returns B if the marks is above 60 to 69" ,() =>{
        expect(sciences(65)).toBe('B');
    })
    it ("returns c if the marks is above 50 to 59" ,() =>{
        expect(sciences(55)).toBe('C');
    })
    it ("returns Pass if the marks is above 40 to 49" ,() =>{
        expect(sciences(45)).toBe('Pass');
    })
    it ("returns Sup if the marks is below 40" ,() =>{
        expect(sciences(39)).toBe('Sup');
    })


})
describe("languages", () =>{
    it ("returns A if the marks is above75 to 100" ,() =>{
        expect(languages(79)).toBe('A');
    })
    it ("returns B if the marks is above 65 to 74" ,() =>{
        expect(languages(70)).toBe('B');
    })
    it ("returns c if the marks is above 55 to 64" ,() =>{
        expect(languages(63)).toBe('C');
    })
    it ("returns Pass if the marks is above 45 to 55" ,() =>{
        expect(languages(53)).toBe('Pass');
    })
    it ("returns Sup if the marks is below 45" ,() =>{
        expect(languages(43)).toBe('Sup');
    })

    describe("calculateGradeAverage", () =>{
        it ("returns the name of the student ,grades and the average" ,() =>{
            const studentScore ={name:"Miriam Mugure",math:80,eng:65,kis:48,phy:67,che:56,re:89,comp:82
              };
              const result = calculateGradeAverage(studentScore);
              expect(result).toEqual({
                  name: "Miriam Mugure",
                  math: "A",
                  eng: "B",
                  kis: "Pass",
                  phy: "B",
                  che: "C",
                  re: "A",
                  comp: "A",
                  average: 69
              });
        })
       
    
    
    })


})