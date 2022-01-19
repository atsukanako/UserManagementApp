import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, loading, disabled } = props;
  return (
    <Button
      onClick={onClick}
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isLoading={loading}
      disabled={disabled}
    >
      {children}
    </Button>
  );
});
