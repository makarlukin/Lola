// Assuming 'flatten' is your array
this.transform.as = flatten.map((f, i) => ({
    originalValue: f,
    index: i,
    transformedValue: `Transformed ${f}`
}));
