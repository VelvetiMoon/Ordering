import { useState } from "react";

export default function MiddlePanel({ onPaxChange }) {
  const [pax, setPax] = useState(30);

  const handleChange = (e) => {
    const selectedPax = e.target.value;
    setPax(selectedPax);
    onPaxChange(selectedPax);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Choose Pax</h2>
      <select value={pax} onChange={handleChange} className="border p-2">
        <option value="30">30 pax - ₱16,500</option>
        <option value="50">50 pax - ₱19,500</option>
        <option value="80">80 pax - ₱21,000</option>
        <option value="100">100 pax - ₱24,500</option>
        <option value="150">150 pax - ₱29,500</option>
        <option value="200">200 pax - ₱36,500</option>
        <option value="300">300 pax - ₱43,500</option>
        <option value="350">350 pax - ₱50,500</option>
        <option value="400">400 pax - ₱58,500</option>
        <option value="450">450 pax - ₱66,500</option>
        <option value="500">500 pax - ₱74,500</option>
      </select>
    </div>
  );
}
