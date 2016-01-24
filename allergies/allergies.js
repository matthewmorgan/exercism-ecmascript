const ALLERGENS = [
  "eggs",
  "peanuts",
  "shellfish",
  "strawberries",
  "tomatoes",
  "chocolate",
  "pollen",
  "cats"
];

export default function(score) {
  {
    this.list = () => ALLERGENS.filter((_, i) => 2**i & score);
    this.allergicTo = allergen  => this.list().includes(allergen);
  }
}