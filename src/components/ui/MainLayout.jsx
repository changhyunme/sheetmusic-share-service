const MainLayout = ({ children }) => {
    return (
        <div className="w-full md:max-w-3xl mx-auto bg-zinc-700">
            {children}
        </div> 
    )
}

export default MainLayout;