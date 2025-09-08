import styles from './styles.module.css';

// tipo de props que o componente Heading vai receber
type HeadingProps = {
  children: React.ReactNode;
};

export function Heading(props: HeadingProps) {
  const { children } = props;
  return <h1 className={styles.heading}>{children}</h1>;
}
