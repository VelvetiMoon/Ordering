export default function RightPanel({ pax }) {
  const prices = {
    30: 16500,
    50: 19500,
    80: 21000,
    100: 24500,
    150: 29500,
    200: 36500,
    300: 43500,
    350: 50500,
    400: 58500,
    450: 66500,
    500: 74500,
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Summary</h2>
      <p>Pax: {pax}</p>
      <p>Total Price: ₱{prices[pax]}</p>
    </div>
  );
}
