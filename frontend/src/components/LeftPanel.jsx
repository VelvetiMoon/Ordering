export default function LeftPanel() {
    const cocktails = [
      "Sex on the Beach",
      "Tequila Sunrise",
      "Mojito",
      "Tokyo Iced Tea",
    ]; // Add more items as needed
  
    const mocktails = ["Sunrise", "Cheche"];
    const shooters = ["Lemon Drop", "Bob Marley", "B52"];
  
    return (
      <div className="p-4 bg-gray-100">
        <h2 className="text-lg font-bold">Cocktails</h2>
        <ul>
          {cocktails.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2 className="text-lg font-bold mt-4">Mocktails</h2>
        <ul>
          {mocktails.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2 className="text-lg font-bold mt-4">Shooters</h2>
        <ul>
          {shooters.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  