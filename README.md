React homework template
Functional Component and React Hooks

useState hook Acesta este primul hook. E destul de simplu, dar totuși, cel mai important. Din denumire este clar că este asociat cu starea componentei. Datorită lui, componentele funcționale au o stare internă.

import { useState } from "react";

const App = () => { const [value, setValue] = useState(0);

return (

{value} <button type="button" onClick={() => setValue(value + 1)}> Increment value by 1
); };
useState creează o stare și o metodă care va modifica valoarea acesteia. Ca parametru, acest hook ia o stare inițială. În cazul nostru, numărul 0. Aici poate fi stocat orice tip de date.

Hook-ul useState returnează o matrice de două elemente: primul este valoarea stării curente, iar al doilea este o funcție de modificare a stării care poate fi folosită oriunde. De exemplu, într-un handler de evenimente. React va stoca această stare între randări. Folosind destructurarea, putem specifica orice nume de variabilă.

Ce este, de fapt, un hook? Hooks - sunt funcții pe care le putem folosi pentru «a ne conecta» la starea interioară a unei componente și la metodele din ciclul de viață a acesteia, dar și pentru a utiliza React fără clase. Hooks nu funcționează în cadrul claselor.

useEffect hook Metodele ciclului de viață sunt utilizate pentru a efectua unele operații în diferite etape ale vieții componentei. De exemplu, solicitări de date către backend, adăugarea de listeners la anumite evenimente etc. Toate acestea se numesc «efecte secundare». Folosind useEffect în componente funcționale, putem realiza toate aceste «efecte», simulând trei metode din lifecycle - componentDidMount, componentDidUpdate, componentWillUnmount, combinându-le într-un singur API.

import { useState, useEffect } from "react";

const App = () => { const [value, setValue] = useState(0);

useEffect(() => { document.title = You clicked ${value} times; });

return (

You clicked {value} times

<button onClick={() => setValue(value + 1)}>Click me
); };
useEffect(callback, deps) ia două argumente:

callback - o funcție în interiorul căreia se execută toată logica unui efect. De exemplu, solicitări către server, setarea handler-ului de evenimente pentru un document etc. dependencies - o matrice de variabile. Atunci când oricare dintre variabile se modifică, efectul va fi lansat și callback-ul va fi executat. Acestea pot fi date din state, props sau orice valoare locală din cadrul componentei. Dependențe Dacă nu vom trece o matrice de dependențe, efectul se va executa pentru fiecare randare a componentei. Tocmai datorită acestei matrice putem imita metode din lifecycle.
