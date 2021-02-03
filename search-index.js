var searchIndex = JSON.parse('{\
"npath":{"doc":"Normalized Paths","i":[[8,"NormPathBufExt","npath","Extension trait for [<code>PathBuf</code>].",null,null],[10,"lexical_push","","Lexically appends <code>path</code> to <code>self</code>.",0,[[["path",3],["asref",8]]]],[8,"NormPathExt","","Extension trait for [<code>Path</code>].",null,null],[10,"absolute","","Returns the absolute equivalent of <code>self</code>.",1,[[],[["result",6],["pathbuf",3]]]],[10,"base","","Returns the last path component of <code>self</code>.",1,[[],["path",3]]],[10,"dir","","Returns <code>self</code> up to, but not including, the final …",1,[[],["path",3]]],[10,"is_inside","","Returns whether <code>self</code> is lexically inside <code>base</code>.",1,[[["path",3],["asref",8]],["bool",15]]],[10,"normalized","","Returns the normalized equivalent of <code>self</code>.",1,[[],["pathbuf",3]]],[10,"lexical_join","","Returns <code>path</code> lexically joined to <code>self</code>.",1,[[["path",3],["asref",8]],["pathbuf",3]]],[10,"relative_to","","Returns the normalized relative path from <code>base</code> to <code>self</code>.",1,[[["path",3],["asref",8]],[["pathbuf",3],["option",4]]]],[10,"resolved","","Returns the normalized equivalent of <code>self</code>, with …",1,[[],[["result",6],["pathbuf",3]]]],[10,"rooted_join","","Returns <code>path</code> restricted to <code>self</code>.",1,[[["path",3],["asref",8]],["pathbuf",3]]],[10,"try_rooted_join","","Returns <code>path</code> restricted to <code>self</code>.",1,[[["path",3],["asref",8]],[["result",6],["pathbuf",3]]]]],"p":[[8,"NormPathBufExt"],[8,"NormPathExt"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);