import classNames from "classnames";
import styles from "./style.module.css";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
};
