import React, { useState } from "react";
import { Textarea, Button } from "@mantine/core";
import { useCompleteModeStyles } from "./Complete.styles";
import { useModeContext } from "../../Context/FormContext";

const Complete = () => {
  const { classes } = useCompleteModeStyles();

  const { compMode, compInput, setCompInput } = useModeContext();
  const [submit, setSubmit] = useState(false);

  const clickHandler = () => {
    setSubmit(true);
    console.log(JSON.stringify(compMode));
  };

  return (
    <div className={classes.container}>
      {/* Input Field + Output Box */}
      <div className={classes.dataBoxWrapper}>
        {/* => Input  */}
        <Textarea
          placeholder="Insert text here"
          value={compInput}
          onChange={(event) => setCompInput(event.currentTarget.value)}
          classNames={{
            root: classes.textAreaRoot,
            wrapper: classes.textAreaWrapper,
            input: classes.textAreaInput,
          }}
        />

        {/* =>Output Box */}
        {submit ? (
          <Textarea
            value={JSON.stringify(compMode)}
            classNames={{
              root: classes.textAreaRoot,
              wrapper: classes.textAreaWrapper,
              input: classes.textAreaInput,
            }}
          />
        ) : (
          <Textarea
            disabled
            classNames={{
              root: classes.textAreaRoot,
              wrapper: classes.textAreaWrapper,
              input: classes.textAreaInput,
            }}
          />
        )}
      </div>
      {/* =>Submit Btn */}
      <div className={classes.btnWrapper}>
        <Button onClick={clickHandler} classNames={{ root: classes.btnRoot }}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Complete;
