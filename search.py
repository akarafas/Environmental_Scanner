import json

def fix_string(phrase):
	punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
	for x in phrase.lower(): 
        	if x in punctuations: 
            		phrase = phrase.replace(x, "") 
	return phrase.lower()


def find_matches(search_phrase):
	possibilities = []
	search_phrase = fix_string(search_phrase)
	with open ('final_data_50.jsonl', 'r', encoding = 'utf-8') as data:
		for line in data:
			line = json.loads(line)
			line_search = fix_string(line['product_name'])
			if search_phrase in line_search:
				return line
				#possibilities.append(line)
	#return possibilities	 
	
