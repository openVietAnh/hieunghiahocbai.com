import { Button, TextField, Typography } from "@mui/material";
import { Alert } from "./shared";
import { useEffect, useState } from "react";
import { randomNumber } from "../utils";

export const NextPrevious: React.FC = () => {
  const [type, setType] = useState("");
  const [number, setNumber] = useState(0);
  const [answer, setAnswer] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const generateQuestion = () => {
    const type = Math.random() < 0.5 ? "next" : "previous";
    const num = randomNumber(100);
    setNumber(type == "previous" && num == 0 ? num + 1 : num);
    setType(type);
  };

  const checkAnswer = async () => {
    const isCorrect =
      type == "next"
        ? Number(answer) - 1 == number
        : Number(answer) + 1 == number;

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
    <div
      style={{
        display: "flex",
        padding: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Typography variant="h4" gutterBottom mb={0}>
          Số liền {type == "next" ? "sau" : "trước"} số {number} là:
        </Typography>
        <TextField
          id="unit"
          sx={{ width: 100 }}
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
          variant="outlined"
          size="medium"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>

      <Button onClick={checkAnswer} variant="contained">
        Kiểm tra kết quả
      </Button>
      <Alert
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
      />
    </div>
  );
};
