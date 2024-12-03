export function updateStatus({request, response, database}) {
    const { id } = request.params
    const { solution } = request.body

    database.update("tickets", id, {status: "Closed", solution })

    return response.end()
}