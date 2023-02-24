import React from "react";
import { Audio } from "react-loader-spinner";

const UseEffectHook = React.lazy(() => import("./UseEffectHook"));

const SuspenseComponent = () => {
  return (
    <div>
      <React.Suspense
        fallback={
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
          />
        }
      >
        <div>
          <UseEffectHook />
        </div>
      </React.Suspense>
    </div>
  );
};

export default SuspenseComponent;
