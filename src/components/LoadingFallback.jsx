export default function LoadingFallback() {
  return (
    <div className="fixed z-40 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <div className="origin-center w-36 h-36 spin">
        <img src="goodslogo2.svg" alt="" className="w-full h-full" />
      </div>
    </div>
  );
}
