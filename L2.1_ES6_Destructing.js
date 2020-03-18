const colors = {
    blue: "mavi",
    red: "kirmizi",
    green: "yesil",
    color5: {
        black: "siyah"
    }
};
const { blue, red, green, yellow = "sari" } = colors;

console.log(blue, red, green, yellow);
const { color5: { black: colorX } } = colors;
console.log(colorX);