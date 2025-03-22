
const AuthBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-100/20 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-indigo-100/20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-blue-200/10 blur-3xl"></div>
    </div>
  );
};

export default AuthBackground;
