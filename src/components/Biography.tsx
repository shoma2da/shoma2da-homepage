export function Biography() {
  const timeline = [
    { year: "1988", event: "Born in Brazil" },
    { year: "1990", event: "Moved to Japan" },
    { year: "2012", event: "Worked at Yahoo! Japan" },
    { year: "2017", event: "Founded microCMS" },
    { year: "2024", event: "Exited microCMS at a $10M valuation" },
    { year: "2025–Present", event: "Solo founder" },
  ];

  return (
    <section className="w-full py-16 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-6">
        <h2>Biography</h2>
        
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-[#FF7A00] rounded-full"></div>
                {index !== timeline.length - 1 && (
                  <div className="w-0.5 h-full min-h-[2rem] bg-[#e5e5e5] mt-2"></div>
                )}
              </div>
              
              <div className="flex-1 pb-2 -mt-1">
                <div className="text-[#FF7A00] font-bold mb-1 leading-none">{item.year}</div>
                <div className="opacity-80">{item.event}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}