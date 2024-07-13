
const Navbar = () => {
  return (
    <div className="px-[77px] flex justify-between items-center mt-[15px]">
        <div className="flex flex-row items-center">
             <img src="./logo_grow_up_buddy.png" alt="img" />
             <h1 className="font-semibold text-[24px]">GrowUp Buddy</h1>
        </div>
        <div className="flex flex-row gap-[11px]">
            <img src="./AddCircle.png" alt="img" height={62} width={62}/>
            <img src="./ellipse.png" alt="img" height={62} width={62}/>
            <img src="./ellipse.png" alt="img" height={62} width={62}/>
            <img src="./ellipse.png" alt="img" height={62} width={62}/>
            <img src="./ellipse.png" alt="img" height={62} width={62}/>

        </div>
        <div className="flex flex-row gap-[10px]">
            <img src='search.png' alt="img" width={24} height={24} />
            <img src="./ellipse.png" alt="img" height={44} width={44}/>
        </div>

    </div>
  )
}

export default Navbar