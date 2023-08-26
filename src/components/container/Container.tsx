import styles from "./style.module.css";

export const Container = ({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={styles.container}>{children}</div>;
};
