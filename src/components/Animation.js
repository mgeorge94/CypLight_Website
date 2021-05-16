export const fade = {
 hidden: { opacity: 0 },
 show: { opacity: 1, transition: { duration: 4 } },
};
export const pageAnimation = {
 hidden: { opacity: 0 },
 show: { opacity: 1, transition: { duration: 1 } },
 exit: { opacity: 0 },
};
export const gridAnimation = {
 hidden: { opacity: 0 },
 show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
export const gridElementAnimation = {
 hidden: { x: 1000, opacity: 0 },
 show: { x: 0, opacity: 1, transition: { duration: 1 } },
};
export const titleAnimation = {
 hidden: { opacity: 0 },
 show: { opacity: 1, transition: { duration: 2 } },
};
export const containerAnimation = {
 hidden: { x: 100 },
 show: { x: 0, transition: { duration: 1 } },
};
