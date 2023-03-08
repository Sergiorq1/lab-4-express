import { useQuery } from 'react-query'

// This example uses React Query. 
// Rect Query requires a QueryClientProvider. 
// See index.js to see where this is setup. 

function Instruments() {
  // Load /sfpopos using useQuery
  const { isLoading, error, data } = useQuery('instruments', () => {
    return fetch('/instruments').then(res => res.json())
  });
  // isLoading: a boolean true if loading
  // error: an error object with a message property
  // data: the data loaded from the server

  return (
      <div className="Instruments">
        <h1>Instruments</h1>
        <ul>
          {/* If isLoading is false map the data to components */}
          { isLoading ? "Loading..." : Array.isArray(data) && data.map(
            item => (
                <li key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                </li>
            )
            ) }
          {/* 
          The sfpopos data has more properties
          Challenge: try and render another property here like the address 
          Challenge: Create a component and render that in place of the li 
          */}
        </ul>
      </div>
  );
}

export default Instruments;