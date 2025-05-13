import { Button, Stack, Typography } from "@mui/material";
import { Alert } from "./shared";
import { useEffect, useState } from "react";

export const Minmax: React.FC = () => {
  const [type, setType] = useState("");
  const [numbers, setNumbers] = useState<number[]>([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const generateNumbers = () => {
    const nums = new Set<number>();
    while (nums.size < 10) {
      nums.add(Math.floor(Math.random() * 100));
    }
    setNumbers(Array.from(nums));
    setType(Math.random() < 0.5 ? "max" : "min");
  };

  const checkAnswer = (number: number) => {
    const isCorrect =
      (type === "max" && number === Math.max(...numbers)) ||
      (type === "min" && number === Math.min(...numbers));
    if (isCorrect) {
      setSnackbar({
        open: true,
        message: "✅ Chính xác! Bạn giỏi quá 😎",
        severity: "success",
      });

      setTimeout(() => {
        generateNumbers();
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
    generateNumbers();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Chọn số {type === "max" ? "lớn nhất" : "bé nhất"}
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        justifyContent="center"
      >
        {numbers.map((number, index) => (
          <Button key={index} onClick={() => checkAnswer(number)}>
            <Typography variant="h5">{number}</Typography>
          </Button>
        ))}
      </Stack>
      <Alert
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
      />
    </div>
  );
};
