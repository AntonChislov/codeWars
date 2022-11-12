function htmlspecialchars(formData) {
  // Insert your code here
  let res = formData.replace(/</g, '&lt;')
  res = res.replace(/>/g, '&gt;')
  res = res.replace(/"/g, '&quot;')
  res = res.replace(/&/g, '&amp;')
  return res
}

console.log(htmlspecialchars("<h2>Hello World</h2>"))

'&amp;lt;h2&amp;gt;Hello World&amp;lt;/h2&amp;gt;'
'&lt;h2&gt;Hello World&lt;/h2&gt;'