import styles from './styles.module.css';

// tipo de props que o componente Heading vai receber
type HeaderProps = {
  children: React.ReactNode;
};

export function Header(props: HeaderProps) {
  const { children } = props;
  return <h1 className={styles.header}>{children}</h1>;
}
