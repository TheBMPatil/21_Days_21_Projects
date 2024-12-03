function Introduction() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="h-[120px] border-r-[1px] mt-[-20px]" />
      <div className="w-[5px] h-[5px] bg-green-600 rounded-full"></div>
      <h2
        className="mt-5 text-white font-medium text-[13px]
        tracking-widest"
      >
        HELLO! MY NAME IS
      </h2>
      <h2
        className="text-[70px] font-bold text-white tracking-widest
        mt-5"
      >
        BHAGVAT <br /> MUTTHE
      </h2>
      <img
        src="/avatar.jpg"
        alt="Avatar"
        className="w-[160px] h-[160px] bg-gray-200 p-7 rounded-full"
      />
    </div>
  );
}

export default Introduction;
