/**
 * Eval one expression, and push values into a variable named `ehist'
 * Last value can be accessed through `_' or `qval'
 */
(
  (ehist = 
    typeof ehist === 'undefined' ? [] : ehist
  ).push(typeof _ === 'undefined' ? undefined : _)
  , true
) && alert(
  (_ = qval = eval(prompt("REP~L"))) && qval.toString == Object.prototype.toString 
    ? (
        confirm("That evaluated to an object, stringify it?") 
        ? JSON.stringify(qval) 
        : qval
      ) 
    : qval
  )
  
// in one line:
((ehist=typeof ehist==='undefined'?[]:ehist).push(typeof _==='undefined'?undefined:_),true)&&alert((_=qval=eval(prompt("REP~L")))&&qval.toString==Object.prototype.toString?(confirm("That evaluated to an object, stringify it?")?JSON.stringify(qval):qval):qval)



/**
 * Launch a REPL and evaluate expressions one-by-one until `.end' is encountered
 */
 (erepl = 
  typeof erepl === 'undefined' 
  ? ereplend => 
    ereplend 
    ? (qevali = prompt("JS REPL, .end to end")) 
      && 
      (ereplend = qevali !== '.end') 
      && 
      alert (
        (_ = qval = eval(qevali)) 
        && 
        qval.toString == Object.prototype.toString 
        ? (
          confirm("That evaluated to an object, stringify it?") 
          ? JSON.stringify(qval) 
          : qval
        ) 
        : qval
      ) 
      || 
      erepl(ereplend) 
    : undefined
  : erepl
) 
&& 
erepl(true)

// in one line
(erepl=typeof erepl==='undefined'?ereplend=>ereplend?(qevali=prompt("JS REPL, .end to end"))&&(ereplend=qevali!=='.end')&&alert((_=qval=eval(qevali))&&qval.toString==Object.prototype.toString?(confirm("That evaluated to an object, stringify it?")?JSON.stringify(qval):qval):qval)||erepl(ereplend):undefined:erepl)&&erepl(true)
