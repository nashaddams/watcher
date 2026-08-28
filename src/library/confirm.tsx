import { type ReactElement, useRef } from "react";
import { styled } from "styled-components";
import { Button } from "../shared/elements.tsx";

const Dialog = styled.dialog`
  padding: 0;
  max-width: calc(100% - 48px);
  border: none;
  border-radius: 6px;
`;

const Content = styled.div`
  padding: 24px;
`;

const Message = styled.div`
  margin-bottom: 14px;
`;

const Actions = styled.div`
  text-align: right;
`;

type Props = {
  children: ReactElement;
  message: string;
  onConfirm: () => void | Promise<void>;
};

export function Confirm({ children, message, onConfirm }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <div onClick={() => dialogRef.current?.showModal()}>
        {children}
      </div>
      <Dialog ref={dialogRef} onClick={() => dialogRef.current?.close()}>
        <Content onClick={(e: MouseEvent) => e.stopPropagation()}>
          <Message>{message}</Message>
          <Actions>
            <Button onClick={() => dialogRef.current?.close()}>
              Cancel
            </Button>
            <Button
              primary
              type="button"
              onClick={async () => {
                await onConfirm();
                dialogRef.current?.close();
              }}
            >
              Confirm
            </Button>
          </Actions>
        </Content>
      </Dialog>
    </>
  );
}
