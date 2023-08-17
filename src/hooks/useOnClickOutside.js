import { useEffect } from "react";

export default function useOnClickOutside(ref, handler) {
  //ref : modal을 클릭한건지 외부를 클릭한건지 확인하기위해
  // handler : 외부를 클릭했으면 모달을 닫아주기위해서
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
