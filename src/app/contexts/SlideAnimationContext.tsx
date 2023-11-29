// import { createContext, useContext, useState } from 'react';
// import { ChildrenProps } from '../interfaces/children-props';

// const SlideAnimationContext = createContext<any>(null);

// function SlideAnimationProvider({ children }: ChildrenProps) {
//   const [startTrigger, setStartTrigger] = useState(true);

//   return (
//     <SlideAnimationContext.Provider value={{ startTrigger, setStartTrigger }}>
//       {children}
//     </SlideAnimationContext.Provider>
//   );
// }

// function useAnimationContext() {
//   const context = useContext(SlideAnimationContext);
//   return context;
// }

// export { useAnimationContext, SlideAnimationProvider };
