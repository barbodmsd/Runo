class ApiFeatures{
    constructor(query,queryString){
        this.query=query
        this.queryString = queryString 
    }
    // filters[name]=barbod || filters[name][$eq]=barbod
    filters(){
        const queryObj={...this.queryString}
        const fieldsItems=['page','sort','limit','fields']
        for (const key in fieldsItems) {
            delete queryObj[key];
        }
        this.query=this.query.find(queryObj.filters)
        return this
    }
    // sort=name,-name
    sort(){
        if(this.queryString.sort){
            const sortBy=this.queryString.sort.split(',').join(' ')
            this.query=this.query.sort(sortBy)
        }else{
            this.query=this.query.sort('-createdAt')
        }
        return this
    }
    // fields=name,-name
    limitFields(){
        if(this.queryString.fields){
            const fieldsBy=this.queryString.fields.split(',').join(' ')
            console.log(fieldsBy)
            this.query=this.query.select(fieldsBy)
        }else{
            this.query=this.query.select('-__v')
        }
        return this
    }
    // page=1 & limit=20
    paginate(){
        const page=this.queryString.page*1 || 1;
        let limit=this.queryString.limit*1||20;
        let skip=(page-1)*limit
        this.query=this.query.skip(skip).limit(limit)
        return this

    }
    // populate=categoryId 
    populate(){
        if(this.queryString.populate){
            const populateBy=this.queryString.populate.split(',').join(' ')
            this.query=this.query.populate(populateBy)
        }
        return this
    }
    
}
export default ApiFeatures
