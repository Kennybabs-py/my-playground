import { useState, useRef, useEffect } from "react";
import "./wrappedtab.scss";

export default function WrappedTabAnimation() {
  const [activeTab, setActiveTab] = useState("Profile");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeTabElementRef = useRef<HTMLLIElement | null>(null);

  const tabs = ["Profile", "Settings", "Work", "HomeSpace"];

  useEffect(() => {
    const container = containerRef.current;

    if (activeTab && container) {
      const activeTabElement = activeTabElementRef.current;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;

        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;

        container.style.clipPath = `inset(0 ${Number(
          100 - (clipRight / container.offsetWidth) * 100
        ).toFixed()}% 0 ${Number(
          (clipLeft / container.offsetWidth) * 100
        ).toFixed()}% round 17px)`;
      }
    }
  }, [activeTab, activeTabElementRef, containerRef]);

  return (
    <div className="w-full h-[100vh] wrapped__tab">
      <section className="w-full max-w-[600px] mx-auto min-h-[200px] flex flex-col items-center justify-center">
        <h2>Wrapped Tab Animations</h2>

        <div className="tab__wrapper">
          <ul className="tab__list">
            {tabs.map((tab) => (
              <li
                key={tab}
                ref={activeTab === tab ? activeTabElementRef : null}
                data-tab={tab}
                onClick={() => {
                  setActiveTab(tab);
                }}
              >
                <button type="button" className="tab__button">
                  {tab}
                </button>
              </li>
            ))}
          </ul>

          <div
            aria-hidden
            className="tab__clip_path__container"
            ref={containerRef}
          >
            <ul className="tab__list tab__list__overlay">
              {tabs.map((tab) => (
                <li key={tab}>
                  <button
                    type="button"
                    data-tab={tab}
                    onClick={() => {
                      setActiveTab(tab);
                    }}
                    className="tab__button__overlay tab__button"
                    tabIndex={-1}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
