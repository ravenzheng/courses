### Section 8.4 Special First Order Differential Equations
p603: On the following, show complete steps to actually SET UP and SOLVE the related differential equation. 27, 29, **39**

**Newton's Law of Cooling**
The rate at which the tempature changes at any time is proportional to the _temperature difference_ between the object and the ambient tempature. Let the current tempature of the object be $T$, the initial tempature of the object be $T(0) = T_0$ and the ambient tempature be $A$, where $A$ and $T_0$ are constants. We have
$$
\begin{aligned}
\frac{dT}{dt} &= -k(T - A)\\
\frac{dT}{dt} \cdot \frac{1}{T(t) - A}&= -k\\
\int \frac{dT}{T - A} &= \int (-k)dt\\
\ln |T-A| &= -kt + C\\
T &= \pm e^{-kt + C} + A\\
T &= (\pm e^C) \cdot e^{-kt} + A\\
T &= C e^{-kt} + A &\text{Rename} \pm e^C \to C\\
T(0) &= C e^0 + A \To C = T_0 - A\\
T(t) &= (T_0 - A)e^{-kt} + A
\end{aligned}
$$

27–30\. **Newton's Law of Cooling** Solve the differential equation for Newton's Law of Cooling to find the temperature in the following cases. Then answer any additional questions.
27\. A cup of coffee has a temperature of $90^{\degree}C$ when it is poured and allowed to cool in a room with a temperature of $25^{\degree}C$. One minute after the coffee is poured, its temperature is $85^{\degree}C$. How long must you wait until the coffee is cool enough to drink, say $30^{\degree}C$?
>Solution
According to Newton's Law of Cooling, we have
$$
\begin{aligned}
T(t) &= (T_0-A)e^{-kt} + A\\
&= (90-25)e^{-kt} + 25\\
&= 65e^{-kt} + 25\\
T(1) &= 65e^{-k} + 25 = 85 \To k \approx 0.08\\
T(t) &= 65e^{-0.08t} + 25\\
\end{aligned}
$$
Solve for $t$ when $T(t) = 30$,
$$
\begin{aligned}
65e^{-0.08t} + 25 &= 30 \To t= \frac{\ln {13}}{0.08} \approx 32.1mins
\end{aligned}
$$

29\. A glass of milk is moved from a refrigerator with a temperature of $5^{\degree}C$ to a room with a temperature of $20^{\degree}C$. One minute later the milk has warmed to a temperature of $7^{\degree}C$. After how many minutes does the milk have a temperature that is $90\%$ of the ambient temperature?
>Solution
According to Newton's Law of Cooling, we have
$$
\begin{aligned}
T(t) &= (T_0-A)e^{-kt} + A\\
&= (5-20)e^{-kt} + 20\\
&= -15e^{-kt} + 20\\
T(1) &= -15e^{-k} + 20 = 7 \To k \approx 0.143\\
T(t) &= -15e^{-0.143t} + 20\\
\end{aligned}
$$
Solve for $t$ when $T(t) = 20\cdot 90\%$,
$$
\begin{aligned}
-15e^{-0.143t} + 20 &= 18 \To t= \frac{\ln(2/15)}{-0.143} \approx 14mins
\end{aligned}
$$

39\. **Intravenous drug dosing** The amount of drug in the blood of a patient (in milligrams) due to an intravenous line is governed by the initial value problem $y'(t) = - 0.02y + 3, y(0) = 0$, where $t$ is measured in hours.
a. Find and graph the solution of the initial value problem.
>Solution
[Graph (39a)](https://www.geogebra.org/graphing/D8GJvuxQ)
$$
\begin{aligned}
y'(t) &= - 0.02y + 3\\
\frac{dy}{dt} \cdot \frac{1}{y-150} &=-0.02\\
\int \frac{dy}{y-150} &= \int (-0.02) dt\\
\ln |y-150| &= -0.02t + C\\
y &= \pm e^{-0.02t + C} + 150\\
y &= {\pm e^C} \cdot e^{-0.02t} + 150\\
y &= Ce^{-0.02t} + 150 &\text{Rename} \pm e^C \to C \\
y(0) &= 0 \To y = Ce^0 + 150 \To C = -150\\
y &= -150e^{-0.02t} + 150
\end{aligned}
$$

b. What is the steady-state level of the drug?
>Solution
When the drug is at the steady-state level,
$$
\begin{aligned}
\lim_{t \to \infty} y &= \lim_{t \to \infty} (-150e^{-0.02t} + 150)\\
&= 0+150 = 150 &\text{steady-state level of the drug}
\end{aligned}
$$

c. When does the drug level reach $90\%$ of the steady-state value?
>Solution
$$
\begin{aligned}
y(t) &= 150 \cdot 90\%\\
-150e^{-0.02t} + 150 &= 135 \To t \approx 115.1 hrs
\end{aligned}
$$
