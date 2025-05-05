import { useEffect, useState } from "react";
import { randomNumber } from "../utils";
import {
  TextField,
  Typography,
  Box,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";
import Divider from "@mui/material/Divider";

export const Operator: React.FC = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [answer, setAnswer] = useState("");
  const [operator, setOperator] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const generateQuestion = () => {
    let num1 = randomNumber();
    let num2 = randomNumber();
    const op = Math.random() < 0.5 ? "+" : "-";

    if (op === "+") {
      while (num1 + num2 > 10) {
        num1 = randomNumber();
        num2 = randomNumber();
      }
      setA(num1);
      setB(num2);
    } else {
      num1 = Math.min(num1, 10);
      num2 = Math.min(num2, 10);
      if (num2 > num1) [num1, num2] = [num2, num1];
      setA(num1);
      setB(num2);
    }

    setOperator(op);
  };

  const checkAnswer = async () => {
    const ans = Number(answer);
    const isCorrect = operator === "-" ? a - b === ans : a + b === ans;

    if (isCorrect) {
      setSnackbar({
        open: true,
        message: "✅ Chính xác! Bạn giỏi quá 😎",
        severity: "success",
      });

      setTimeout(() => {
        generateQuestion();
        setAnswer("");
      }, 2000);
    } else {
      setSnackbar({
        open: true,
        message: "❌ Sai rồi, thử lại nhé!",
        severity: "error",
      });
    }
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={4}
        gap="20px"
        margin="auto"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="flex-end"
          margin="auto"
        >
          <Box display="flex" alignItems="center">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              mr={1}
              height="100%"
            >
              <Typography variant="h2" fontWeight="bold">
                {operator}
              </Typography>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="flex-end">
              <Typography variant="h2" fontWeight="bold">
                {a}
              </Typography>
              <Typography variant="h2" fontWeight="bold">
                {b}
              </Typography>
            </Box>
          </Box>

          <Divider
            sx={{
              borderBottomWidth: 4,
              width: "100%",
              maxWidth: 150,
              my: 1,
            }}
          />
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-end"
            gap="10px"
          >
            <Typography variant="h2" fontWeight="bold">
              =
            </Typography>
            <TextField
              id="outlined-basic"
              label="Kết quả"
              variant="outlined"
              fullWidth
              size="medium"
              sx={{
                maxWidth: 150,
              }}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              slotProps={{
                input: {
                  sx: {
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    textAlign: "right",
                  },
                },
                inputLabel: {
                  sx: {
                    fontSize: "2rem",
                    fontWeight: "bold",
                  },
                },
                htmlInput: {
                  sx: {
                    textAlign: "right",
                  },
                },
              }}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: "20px" }}
            onClick={checkAnswer}
          >
            Kiểm tra kết quả
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};
