const knuth = (input, rules) => {
  let q = input;
  let currentStep = 0;

  const applyRule = (rule) => {
    if (q.includes(rule.θ)) {
      //f((σ,j)) = (αφjω,bj) if α is the shortest string for which σ = αθjω
      q = q.replace(rule.θ, rule.φ);
      currentStep = rule.b;
    } else {
      // f((σ,j)) = (σ,aj) if θj does not occur in σ
      currentStep = rule.a;
    }
  };

  // f((σ,N)) = (σ,N)
  while (currentStep < rules.length) {
    applyRule(rules[currentStep]);
  }

  return q;
};

// Euclid's algorithm

const rules = [
  { θ: "ab", φ: "ab", a: 5, b: 1 },
  { θ: "ab", φ: "", a: 3, b: 2 },
  { θ: "", φ: "c", a: 3, b: 1 },
  { θ: "a", φ: "b", a: 4, b: 3 },
  { θ: "c", φ: "a", a: 0, b: 4 },
];

const m = 119;
const n = 544;

console.log(knuth(`${"a".repeat(m)}${"b".repeat(n)}`, rules).length);
