### Section 8.3 Separable Differential Equations
p595: 1, 2, 3, 5, 7, 9, 13, **14**, 15, 17, 19, **20**, 21, 25, 27 , 33, 36, 40, 43abc, 48abc

1\. What is a separable first-order differential equation?
>Solution
A separable first-order differential equation is one that can be written in the form $g(y)y'(t) = h(t)$, where the factor $g(y)$ is a function of $y$ and $h(t)$ is a function of $t$.

2\. Is the equation $t^2y'(t) = \dfrac{t+4}{y^2}$ separable?
>Solution
The equation can be written as $\dfrac{y'(t)}{y^2} = \dfrac{t+4}{t^2}$.

3\. Is the equation $y'(t) = 2y-t$ separable?
>Solution
The equation is not separable.

5–16\. **Solving separable equations** Find the general solution of the following equations. Express the solution explicitly as a function of the independent variable.
5\. $t^{-3}y'(t) = 1$
>Solution
$$
\begin{aligned}
y'(t) &= t^3\\
y(t) &= \frac{1}{4}t^4 + C
\end{aligned}
$$

7\. $\dfrac{dy}{dt} = \dfrac{3t^2}{y}$
>Solution
$$
\begin{aligned}
y y' &= 3t^2\\
\int y dy &= \int 3t^2 dt\\
\frac{1}{2}y^2 &= t^3 + C \To y = \pm \sqrt {2t^3 + C}
\end{aligned}
$$

9\. $y'(t) = e^{\frac{y}{2}} \sin t$
>Solution
$$
\begin{aligned}
e^{-\frac{y}{2}} y' &= \sin t\\
\int e^{-\frac{y}{2}} dy &= \int \sin t dt\\
-2e^{-\frac{y}{2}} &= -\cos t + C\\
e^{-\frac{y}{2}} &= \frac{\cos t}{2} + C\\
-\frac{y}{2} &= \ln (\frac{\cos t}{2} + C) \To y= -2\ln (\frac{\cos t}{2} + C)
\end{aligned}
$$

13\. $y'(t) \csc t = -\frac{y^3}{2}$
>Solution
$$
\begin{aligned}
y^{-3} y' &= -\frac{\sin t}{2}\\
\int y^{-3} dy &= \int (-\frac{\sin t}{2}) dt\\
-\frac{1}{2} y^{-2} &= \frac{\cos t}{2} + C \To y = \pm \sqrt {\frac{1}{-\cos t + C}}
\end{aligned}
$$

14\. $y'(t)e^{\frac{t}{2}} = y^2 + 4$
>Solution
$$
\begin{aligned}
\frac{1}{y^2 + 4} y'&= e^{-\frac{t}{2}} \\
\int \frac{1}{y^2 + 4} dy&= \int e^{-\frac{t}{2}} dt\\
\frac{1}{2} \arctan \frac{y}{2} &= -2e^{-\frac{t}{2}} + C \To
y = 2\tan (-4e^{-\frac{t}{2}} + C)
\end{aligned}
$$

15\. $u'(x) = e^{2x-u}$
>Solution
$$
\begin{aligned}
e^u \cdot u'(x) &= e^{2x}\\
\int e^u \cdot du &= \int e^{2x} dx\\
e^u &= \frac{1}{2}e^{2x} + C\To
u = \ln (\frac{1}{2}e^{2x} + C)
\end{aligned}
$$

17–26\. **Solving initial value problems** Determine whether the follow ing equations are separable. If so, solve the initial value problem.
17\. $ty'(t) = 1, y(1)= 2, t > 0$
>Solution
$$
\begin{aligned}
y'(t) &= t^{-1}\\
y &= \ln t + C & t>0\\
y(1) & =\ln 1 + C = 2 \To C =2\\
y &= \ln t + 2
\end{aligned}
$$

19\. $2yy'(t) = 3t^2, y(0) = 9$
>Solution
$$
\begin{aligned}
\int 2y dy &= \int 3t^2 dt\\
y^2 &= t^3 + C\\
y &= \pm \sqrt {t^3 + C}\\
y(0) &= \sqrt {0 + C} = 9 \To C = 81 &\text{Ignore negative branch As } 9>0\\
y &= \sqrt {t^3 + 81}
\end{aligned}
$$

20\. $y'(t) = e^{ty}, y(0) = 1$
>Solution
The equation is not separable.

21\. $\dfrac{dy}{dt} = ty+2, y(1)=2$
>Solution
The equation is not separable.

25\. $\dfrac{dy}{dx} = e^{x-y}, y(0)=\ln 3$
>Solution
$$
\begin{aligned}
e^y \cdot \frac{dy}{dx} &= e^x\\
\int e^y dy &=\int e^x dx\\
e^y &= e^x + C\\
y &= \ln (e^x + C)\\
y(0) &= \ln (e^0 + C) + 3 \To C= 2\\
y &= \ln (e^x + 2)
\end{aligned}
$$

27–32\. **Solutions in implicit form** Solve the following initial value problems and leave the solution in implicit form. Use graphing software to plot the solution. If the implicit solution describes more than one curve, be sure to indicate which curve corresponds to the solution of the initial value problem.
27\. $y'(t) = \dfrac{t}{y}, y(1) = 2$
>Solution
[Graph (27)](https://www.desmos.com/calculator/qmdu3cw0kx).
$$
\begin{aligned}
y y'(t) &= t\\
\frac{1}{2} y^2 &= \frac{1}{2}t^2 + C\\
y(1) &= 2 \To \frac{1}{2} \cdot 2^2 = \frac{1}{2} \cdot 1^2 + C \To C =\frac{3}{2} \\
y^2 &= t^2 + 3
\end{aligned}
$$

33\. **Logistic equation for a population** A community of hares on an island has a population of $50$ when observations begin (at $t = 0$). The population is modeled by the initial value problem $\dfrac{dP}{dt} = 0.08P(1-\frac{P}{200}), P(0) = 50$.
a. Find and graph the solution of the initial value problem, for $t \ges 0$.
>Solution
[Graph (33a)](https://www.desmos.com/calculator/x08jzd3lx7).
$$
\begin{aligned}
\frac{1}{ 0.08P(1-\frac{P}{200})} \cdot \frac{dP}{dt} &= 1\\
\int \frac{1}{ 0.08P(1-\frac{P}{200})} dP &= \int dt\\
\int \frac{2500}{ P(200-P)} dP &= \int dt\\
\int \frac{25}{P} dP - \int \frac{25}{P-200} dP&= \int dt\\
25\ln P - 25 \ln |P-200| &= t\\
\ln|\frac{P}{P-200}|& = \frac{t}{25}\\
\frac{P}{P-200} &= \pm e^{0.04t + C}\\
\frac{P}{P-200} &= Ce^{0.04t} &\text{Rename} \pm e^C \to C\\
P &= \frac{200Ce^{0.04t}}{Ce^{0.04t} - 1} \\
&= \frac{200}{1 - \frac{1}{C}e^{-0.04t}}\\
&= \frac{200}{1 + Ce^{-0.04t}} &\text{Rename}- \frac{1}{C} \to C\\
P(0) &= \frac{200}{1 + Ce^0} = 50 \To C = 3\\
P(t) &= \frac{200}{1 + 3e^{-0.04t}}
\end{aligned}
$$

b. What is the steady-state population?
>Solution
$$
\begin{aligned}
\lim_{t \to \infty} P(t) & = \lim_{t \to \infty} \frac{200}{1 + 3e^{-0.04t}} \\
&= \frac{200}{1+0} = 200
\end{aligned}
$$

36–39\. **Solutions of separable equations** Solve the following initial value problems. When possible, give the solution as an explicit function of $t$.
36\. $e^y y'(t) = \dfrac{\ln^2 t}{t}, y(1) = \ln 2$
>Solution
$$
\begin{aligned}
\int e^y dy &= \int \frac{\ln^2 t}{t} dt\\
e^y &=\frac{1}{3} \ln^3 t + C\\
y &= \ln(\frac{1}{3} \ln^3 t + C)\\
y(1) &= \ln(\frac{1}{3} \ln^3 1 + C) = \ln 2 \To C = 2\\
y &= \ln(\frac{1}{3} \ln^3 t + 2)\\
\end{aligned}
$$

40–41\. **Implicit solutions for separable equations** For the following separable equations, carry out the indicated analysis.
a. Find the general solution of the equation.
b. Find the value of the arbitrary constant associated with each initial condition. (Each initial condition requires a different constant.)
c. Use the graph of the general solution that is provided to sketch the solution curve for each initial condition.
40\. $y^2y'(t) = t^2 + \dfrac{2}{3}t, y(-1) =1, y(1)=0, y(-1)=-1$
>Solution
General solution
$$
\begin{aligned}
y^2y'(t)& = t^2 + \frac{2}{3}t \\
\int y^2 dy & = \int (t^2 + \frac{2}{3}t) dt\\
\frac{1}{3}y^3 &= \frac{1}{3}t^3 + \frac{1}{3}t^2 + C\\
y &= \sqrt[3]{t^3 + t^2 + C}
\end{aligned}
$$
Initial conditions
$$
\begin{cases}
y(-1) &= \sqrt[3]{-1+1 + C} = 1 \To C = 1\\
y(1) &= \sqrt[3]{1+1 + C} = 0 \To C = -2\\
y(-1) &= \sqrt[3]{-1+1 + C} = -1 \To C = -1
\end{cases}
$$
[Graph 40c](https://www.desmos.com/calculator/pxkb3od3lh)

43\. **Orthogonal trajectories** Use the method in Exercise 42 to find the orthogonal trajectories for the family of circles $x^2 + y^2 = a^2$
>Solution
a. Find $\dfrac{dy}{dx}$
$$
\begin{aligned}
x^2 + y^2 &= a^2 \\
2x + 2yy' &= 0 \To y' = -\frac{x}{y}
\end{aligned}
$$
b. The family of trajectories orthogonal to $x^2 + y^2 = a^2$ satisfies the differential equation $\dfrac{dy}{dx} = \dfrac{-1}{-\frac{x}{y}} = \dfrac{y}{x}$.
C. Solve the differential equation $\dfrac{dy}{dx} = \dfrac{y}{x}$.
$$
\begin{aligned}
\frac{dy}{dx} &= \frac{y}{x}\\
\frac{dy}{dx} \cdot \frac{1}{y}&= \frac{1}{x}\\
\int \frac{1}{y} dy &=\int \frac{1}{x} dx\\
\ln |y| &= \ln |x| + C\\
y &= \pm e^{\ln |x| + C}\\
&= C|x| &\text{Rename } \pm e^C \to C\\
&= Cx &\text{Rename} \pm C \to k
\end{aligned}
$$

48\. **Chemical rate equations** Let $y(t)$ be the concentration of a substance in a chemical reaction (typical units are moles/liter). The change in the concentration, under appropriate conditions, is modeled by the equation $\dfrac{dy}{dt} = -ky^n$, where $k > 0$ is a rate constant and the positive integer $n$ is the order of the reaction.
a. Show that for a first-order reaction $(n = 1)$, the concentration obeys an exponential decay law.
>Solution
$$
\begin{aligned}
\frac{dy}{dt} &= -ky\\
y^{-1} \frac{dy}{dt} &= -k\\
\int y^{-1} dy &= \int -k dt\\
\ln y &= -kt + C\\
y &= e^{-kt + C}\\
y &= Ce^{-kt} &\text{Rename } e^C \to C\\
\end{aligned}
$$

b. Solve the initial value problem for a second-order reaction $(n = 2)$ assuming $y(0) = y_0$.
>Solution
$$
\begin{aligned}
\frac{dy}{dt} &= -ky^2\\
y^{-2} \frac{dy}{dt} &= -k\\
\int y^{-2} dy &= \int -k dt\\
-\frac{1}{y} &= -kt + C\\
y &= \frac{1}{kt-C}\\
y(0) &=\frac{1}{0-C} = y_0 \To C = -\frac{1}{y_0}\\
y &= \frac{y_0}{y_0kt+1}
\end{aligned}
$$

c. Graph the concentration for a first-order and second-order reaction with $k = 0.1$ and $y_0 = 1$.
>Solution
[Graph (48c)](https://www.desmos.com/calculator/9nmow3onu2).
