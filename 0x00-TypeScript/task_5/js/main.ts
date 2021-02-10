interface MajorCredits {
  credits: number;
  _brand: "Major";
}
interface MinorCredits {
  credits: number;
  _brand: "Minor";
}
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const sum = subject1.credits + subject2.credits;
  const res: MajorCredits = {
    credits: sum,
    _brand: "Major",
  };
  
  return res;
}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const sum = subject1.credits + subject2.credits;
  const res: MinorCredits = {
    credits: sum,
    _brand: "Minor",
  };
  
  return res;
}
