const Filters = ({ filterByType, filterByPrice }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-3 px-4 pt-8">
      {/* ====== Filter Types */}

      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">Filter Types </p>

        <div className="flex gap-1 flex-wrap">
          <button onClick={() => filterByType("all")}>All</button>
          <button onClick={() => filterByType("burger")}>Burgers</button>
          <button onClick={() => filterByType("pizza")}>Pizza</button>
          <button onClick={() => filterByType("salad")}>Salad</button>
          <button onClick={() => filterByType("chicken")}>Chicken</button>
        </div>
      </div>

      {/* ====== Filter Price */}
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">Filter Price </p>

        <div className="flex flex-wrap gap-1">
          <button onClick={() => filterByPrice("$")}>$</button>
          <button onClick={() => filterByPrice("$$")}>$$</button>
          <button onClick={() => filterByPrice("$$$")}>$$$</button>
          <button onClick={() => filterByPrice("$$$$")}>$$$$</button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
